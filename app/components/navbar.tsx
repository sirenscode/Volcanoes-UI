const NavBar: React.FC = () =>{
    return(
        <main className="w-full fixed flex flex-row items-center p-[30px]">
            <div className="">
                <h1 className="text-[2em]"><strong>Volcano</strong>es</h1>
            </div>
            <div className="flex flex-row gap-[20px] text-[.8em] w-3/4 items-center justify-center font-semibold text-[.7em]">
                <a href="#">PHOTOS</a>
                <a href="#">VOLCANOES</a>
                <a href="#">EATHQUAKES</a>
                <a href="#">GEOLOGY</a>
                <a href="#">NEWS</a>
            </div>
            <div className="flex flex-row ml-[auto] gap-[20px] items-center">
                <a href="#facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#000" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg></a>
                <a href="#twitter"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 128 128"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75m0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75m0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75" clip-rule="evenodd"/></svg></a>
            </div>

        </main>

    )
}

export default NavBar;