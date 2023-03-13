import{NavLink,Outlet} from "react-router-dom"


const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Movies App</h1>
                    <NavLink to = "/">Welcome</NavLink>
                    <NavLink to = "/movies">Movies</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>

        </div>
     );
}
 
export default RootLayout;