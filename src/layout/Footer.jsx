function Footer() {
  return (
    <div className="py-4 mx-4 w-full flex justify-center items-center text-xl">
      <div className="flex items-center justify-center">
        {`${new Date().getFullYear()} Club Bink - Powered by `}
        <a href="https://hackalajara.xyz/"><img src="https://hackalajara.xyz/hackalajara-logo.png" width={200} alt="Hackalajara 2024" /></a>
      </div>
    </div>
  );
}

export default Footer;
