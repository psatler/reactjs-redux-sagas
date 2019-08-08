import React from 'react';
// import html2canvas from 'html2canvas';
// import saveSvgAsPng from 'save-svg-as-png';

import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
    PDFViewer,
} from '@react-pdf/renderer';

// import { Container } from './styles';
import logo from '../../assets/images/logo.png';

export default function PDFDocument({ svgURI }) {
    const canvas = document.createElement('canvas');

    const sourceObj = { uri: svgURI, method: 'GET', headers: {}, body: '' };

    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>Section #1</Text>
                </View>
                <View>
                    <Text>Section #2</Text>
                </View>

                <Image source={logo} />
                <Image source={logo} />
            </Page>
        </Document>
    );
}

export const SVGDoc = (
    <svg id="svgtag" x="0px" y="0px" viewBox="0 0 100 100">
        <g>
            <rect x="15.5" y="15.5" fill="#fff" width="44" height="44" />
            <path d="M59,16v43H16V16H59 M60,15H15v45h45V15L60,15z" />
        </g>
        <g>
            <path
                fill="#fff"
                d="M60.5,81.5c-12.1,0-22-9.9-22-22s9.9-22,22-22s22,9.9,22,22S72.6,81.5,60.5,81.5z"
            />
            <path
                d="M60.5,38C72.4,38,82,47.6,82,59.5S72.4,81,60.5,81S39,71.4,39,59.5S48.6,38,60.5,38 M60.5,37C48.1,37,38,47.1,38,59.5
            S48.1,82,60.5,82S83,71.9,83,59.5S72.9,37,60.5,37L60.5,37z"
            />
        </g>
    </svg>
);

export const Icon = ({ fill, id }) => (
    <svg id={id} viewBox="0 0 409.6 405.76" fill={fill}>
        <path
            d="M682.8,396.06c50.72,0,91.84-48.13,91.84-107.49,0-82.33-41.12-107.49-91.84-107.49S591,206.24,591,288.57c0,59.36,41.12,107.49,91.84,107.49Zm0,0"
            transform="translate(-478 -181.08)"
        />
        <path
            d="M885.6,554.28,839.27,449.9a23.3,23.3,0,0,0-10.48-11.15l-71.91-37.43a4.66,4.66,0,0,0-4.93.41,113.41,113.41,0,0,1-138.3,0,4.67,4.67,0,0,0-4.94-.41l-71.9,37.43a23.24,23.24,0,0,0-10.47,11.15L480,554.28a23.16,23.16,0,0,0,21.18,32.56H864.42a23.17,23.17,0,0,0,21.18-32.56Zm0,0"
            transform="translate(-478 -181.08)"
        />
    </svg>
);
