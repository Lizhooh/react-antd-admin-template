import styled from 'styled-components';

export default styled.i.attrs({
    className: 'material-icons',
    children: p => p.type || '',
})`
    display: ${p => !p.type ? 'none' : 'block'};
    font-size: ${p => p.size || 20}px;
    color: ${p => p.color || '#333'};
    margin: ${p => (typeof p.margin === 'number' ? p.margin + 'px' : p.margin) || 0};
`;

