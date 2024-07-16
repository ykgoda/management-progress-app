const Header: React.FC = () => {
    type HeaderItem = {
        content: string,
        root?: string,
    }

    const headerItems:HeaderItem[] = [{
        content:'menu',
        
    }];

    return (
        <div className="header">
            <ul className="header_list">
                {headerItems.map((item)=> item.content)}
            </ul>
        </div>
    )
}

export default Header;