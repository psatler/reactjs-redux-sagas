import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
// import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

import { PDFDownloadLink } from '@react-pdf/renderer';
import saveSvgAsPng from 'save-svg-as-png';
import canvg from 'canvg';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

import PDF, { SVGDoc, Icon, Table } from '../PDFDocument';
import * as html2canvas from '../PDFDocument/htm2CanvasExternal';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [seePdf, setSeePdf] = useState(false);
    const [svgURI, setSvgUri] = useState('');
    const dispatch = useDispatch();
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );

    function downloadPdf() {
        const input = document.getElementById('#Test');
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('download.pdf');
        });
    }

    // function svgString2Image(svgString, width, height, format, callback) {
    //     // set default for format parameter
    //     format = format || 'png';
    //     // SVG data URL from SVG string
    //     // let svgData =
    //     //     'data:image/svg+xml;base64,' +
    //     //     btoa(unescape(encodeURIComponent(svgString)));
    //     // create canvas in memory(not in DOM)
    //     const canvas = document.createElement('canvas');
    //     // get canvas context for drawing on canvas
    //     const context = canvas.getContext('2d');
    //     // set canvas size
    //     canvas.width = width;
    //     canvas.height = height;
    //     // create image in memory(not in DOM)
    //     const image = new Image();
    //     // later when image loads run this
    //     image.onload = function() {
    //         // async (happens later)
    //         // clear canvas
    //         context.clearRect(0, 0, width, height);
    //         // draw image with SVG data to canvas
    //         context.drawImage(image, 0, 0, width, height);
    //         // snapshot canvas as png
    //         const pngData = canvas.toDataURL(`image/${format}`);
    //         // pass png data URL to callback
    //         callback(pngData);
    //     }; // end async
    //     // start loading SVG data into in memory image
    //     // image.src = svgData;
    //     image.src = svgString;
    // }

    // call svgString2Image function
    // svgString2Image(svgURI, 800, 600, 'png', function(pngData) {
    //     // pngData is base64 png string
    //     console.log(pngData);
    // });

    async function handlePdf() {
        // const canvas = await html2canvas(document.getElementById('tableDiv'), {
        //     // allowTaint: true,
        //     // useCORS: true,
        // });
        // const pdf = new jsPDF('p', 'mm', 'A4');
        // pdf.addHTML(
        //     document.getElementById('tableDiv'),
        //     5,
        //     5,
        //     {
        //         // useCORS: true,
        //     },
        //     () => {
        //         pdf.save('test.pdf');
        //     }
        // );
        // const imgData = canvas.toDataURL('image/png', 0.5);
        // console.log(imgData);
        // pdf.addImage(imgData, 'PNG', 5, 5, canvas.width, canvas.height);
        // pdf.save('HTML-Document.pdf');
        // saveSvgAsPng
        //     .svgAsDataUri(document.getElementById('icontest'), canvg)
        //     .then(uri => {
        //         console.log('uri', uri);
        //         setSvgUri(uri);
        //         fetch(uri).then(response =>
        //             console.log(response.arrayBuffer())
        //         );
        //     })
        //     .catch(error => console.log(error));
        // const SVGDiv = document.getElementById("my-svg-div");
    }

    function anotherDownloadFunc() {
        const input = document.getElementById('canvas');
        html2canvas(input, {
            onrendered(canvas) {
                const imgData = canvas.toDataURL('image/png');
                const doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('sample-file.pdf');
            },
        });
    }

    function handleDownloadPdf() {
        // const input = document.getElementById('tableDiv');
        // html2canvas(input).then(canvas => {
        //     const imgData = canvas.toDataURL('image/jpeg', 0.5);
        //     const pdf = new jsPDF('p', 'mm', 'a4');
        //     // const width = pdf.internal.pageSize.getWidth();
        //     // const height = pdf.internal.pageSize.getHeight();

        //     pdf.addImage(imgData, 'JPEG', 5, 5, 100, 150);
        //     pdf.save('test.pdf');
        // });

        // const canvas = await html2canvas(document.getElementById('tableDiv'), {
        //     // allowTaint: true,
        //     // useCORS: true,
        // });
        const pdf = new jsPDF('p', 'mm', 'A4');
        pdf.addHTML(document.getElementById('tableDiv'), 5, 5, {}, () => {
            pdf.save('test.pdf');
        });
    }

    // replacing componentDidMount
    useEffect(() => {
        // creating another function to be able to use async directive
        async function loadProducts() {
            const response = await api.get('products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            // and instead of setState, we use setProducts now
            setProducts(data);
            setSeePdf(true);
        }

        loadProducts();
        handlePdf();
    }, []);

    function handleAddProduct(id) {
        console.tron.log(id);
        // here using the bindActionCreators we can use the action directly from the props
        dispatch(CartActions.addToCartRequest(id));

        // after adding a product to cart, redux saga navigates to the /cart page. This happens
        // at the generator addToCart

        // const { dispatch } = this.props;
        // dispatch(CartActions.addToCart(product));
    }

    console.log('svgURI', svgURI);

    return (
        <>
            <button type="button" onClick={handleDownloadPdf}>
                handleDownloadPdf
            </button>
            <button type="button" onClick={handlePdf}>
                downloadPdf
            </button>
            <button type="button" onClick={anotherDownloadFunc}>
                anotherDownloadFunc
            </button>

            {seePdf && svgURI && (
                <PDFDownloadLink
                    document={<PDF svgURI={svgURI} />}
                    fileName="somename.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            'Loading document...'
                        ) : (
                            <button type="button">Download Now</button>
                        )
                    }
                </PDFDownloadLink>
            )}
            <Table />
            <Icon fill="red" id="icontest" />

            {/* {seePdf && <PDF />} */}

            <ProductList id="Test">
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => handleAddProduct(product.id)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                                {amount[product.id] || 0}
                                <span>Adicionar ao carrinho</span>
                            </div>
                        </button>
                    </li>
                ))}
            </ProductList>
        </>
    );
}
