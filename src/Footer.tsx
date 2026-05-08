const Footer = () => {
        const year = new Date().getFullYear();
    return (
        <footer>
            <p>
                © <span>{year}</span> Rukhshan Shahid | Crafted with <span style={{ color: '#ff5e00' }}> React</span>
            </p>
        </footer>
    )
}

export default Footer
