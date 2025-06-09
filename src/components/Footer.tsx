const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-gray-700">

                <div className="text-center text-white py-4">
                    Copyright © {currentYear}, Coding Factory 7. All rights reserved.
                </div>

            </footer>
        </>
    )
}

export default Footer;