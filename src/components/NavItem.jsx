const NavItem = ({ children, className, content, navID, nav }) => (
  <a
    href={navID ? navID : `#${content.toLowerCase()}`}
    className={
      className ||
      (nav ? "block" : "hidden") +
        " lg:block px-6 lg:px-14 py-6 cursor-pointer font-[Praktika-Bold] text-center lg:border-l-4 border-black h-full whitespace-nowrap"
    }
  >
    {content ? <span>{content}</span> : children}
  </a>
);

export default NavItem;
