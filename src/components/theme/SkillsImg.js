import styled from 'styled-components';

const ImgCircleWrapp = styled.div`
    width: 40px;
    height: 40px;

    position: relative;
    padding: 14px 0 0 15px;
    z-index: 2;
    &:before 
    {
        ${props => props.circle || props.theme.circle}
        top: 0;
        left: 0;

    };
`

const SkillsFoto = styled.img.attrs(prop => ({ src: prop.img, }))`
`

const SkillsImg = ({ img }) => {
    return (
        <ImgCircleWrapp>
            <SkillsFoto img={img} />
        </ImgCircleWrapp>
    )
}

export default SkillsImg;
