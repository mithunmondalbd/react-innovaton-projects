import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2'>
            <h1 className='text-2xl font-bold'>Previous knowledge cafe </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;