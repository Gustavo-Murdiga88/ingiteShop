import { styled } from "..";

export const ContainerSuccess = styled('div', {
    minHeight:656,
    width: 1180,
    margin: '0 auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    paddingTop: '3rem',

    '& > p':{
        fontSize: '$2xl',
        fontWeight:'bold',

        marginBottom: '4rem',

    }
})

export const ProductContainer = styled('main',{
    background: "linear-gradient(to bottom, #1EA483 0%, #7465D4 100%)",
    borderRadius: 8,
    padding: '1rem',

    marginBottom: '2rem',
    
    'img':{
        width: 127, 
        height: 145,

        objectFit: 'cover',
    }
})

export const  FooterSuccess = styled('footer',{
    maxWidth: 590,
    textAlign: 'center',
    fontSize: '$xl',
    lineHeight: '1.6',
    padding:'1rem',

    'a':{
        display: 'block',
        textDecoration: 'none',
        color:'$green500',
        fontWeight:'bold',
        fontSize:'$lg',
        marginTop: '5.5rem',

        borderRadius: 8,
    
        '&:hover':{
            color: '$green300',
        }
    }

});