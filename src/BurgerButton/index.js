import MenuIcon from '@mui/icons-material/Menu';

export default function BurgerButton({ onClick }) {
    return (
        <MenuIcon npm start onClick={onClick}>
            <span role="img" aria-label="Menu"/>
        </MenuIcon>
    )
}
