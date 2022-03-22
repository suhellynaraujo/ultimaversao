/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Player } from 'video-react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Quemsomos.css'


export default () => {
  return (
    <>
    
      <Header />
      <main className="quemsomosprincipal">
        <div className="titulos ">
          <h1>Quem somos</h1>
          <p className="textoquemsomos">
            Somos um grupo de alunos da ONG Recode Pro empenhados e em
            desenvolvimento, buscando evolução constante e a primeira oportunidade
            no mercado de trabalho na área de tecnologia, especificamente
            Full-Stack. Nosso projeto é voltado para a inclusão de mulheres
            moradoras de comunidades carentes que estão de certa forma excluídas
            por não conseguirem receber suas encomendas dentro de suas
            comunidades, visto que muitas empresas não conseguem adentrar nas
            comunidades e entregar os produtos dos mesmos. O objetivo é facilitar
            a comercialização de produtos e serviços dentro destas comunidades,
            focando especificamente mulheres que residem dentro destas
            comunidades.
          </p>
          <a href="../../Contato.jsx">
            <button className='btn-quemsomos' type="submit">Saiba Mais</button>
          </a>
        </div>
       {/* <div className="videoquemsomos">
            <Player  playsInLine poster="/img/ft favela.jpg" src="https://youtu.be/KsF-X2kKFCU" />
  </div> */}

      </main>
      <Footer />
    </>
  );
}

