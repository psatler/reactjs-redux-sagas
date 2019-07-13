import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>
                    Very cool sneackerVery cool sneackerVery cool sneackerVery
                    cool sneackerVery cool sneackerVery cool sneackerVery cool
                    sneackerVery cool sneackerVery cool sneackerVery cool
                    sneacker
                </strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Very cool sneacker</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Very cool sneacker</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Very cool sneacker</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Very cool sneacker</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?resize=326:*"
                    alt="Tenis"
                />
                <strong>Very cool sneacker</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                        <span>Adicionar ao carrinho</span>
                    </div>
                </button>
            </li>
        </ProductList>
    );
}
