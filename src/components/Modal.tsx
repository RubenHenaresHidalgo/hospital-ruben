import { IModal } from "../domain/interfaces";
import styled from 'styled-components';

export const Modal = () => {
    return(
        <>
          <Overlay>
            <ContenedorModal>
              <EncabezadoModal>
                <h3>Titulo</h3>
              </EncabezadoModal>
              <BotonCerrar>
                X
              </BotonCerrar>
            </ContenedorModal>
          </Overlay>  
        </>
    )
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0.5);
  padding: 40px;
  display: flex;
  align-items: center:
  justify-content: center;
`;

const ContenedorModal =styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  `;

  const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
      font-weight: 500;
      font-size: 16px;
      color: #1766DC;
    }
  `;

  const BotonCerrar = styled.div`
    
  `