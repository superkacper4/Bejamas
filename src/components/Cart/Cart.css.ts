import styled from 'styled-components'

interface Types {
    isCartOpen: boolean;
}

const StyledCart = styled.div<Types>`
    width: 100%;
    max-width: 500px;
    border: 4px solid ${({ theme }) => theme.colors.third};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 15vh;
    right: 0;
    transform: ${({ isCartOpen }) => isCartOpen ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform .5s;
    z-index: 2;
`;

const StyledProduct = styled.div`
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:  1px solid ${({ theme }) => theme.colors.third};

`;

const StyledImg = styled.img`
    max-width: 50%;
    height:100%;
`;

const StyledDiv = styled.div`
    width: 50%;
    padding:0;
    margin: 0;
`

const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 5px;
`;

const StyledClearButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
`;

export { StyledCart, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton }