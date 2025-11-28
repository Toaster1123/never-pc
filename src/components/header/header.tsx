import logo from "@/assets/icons/logo3.jpg";
import { LinkItem } from "./components";
import { useEffect, useRef, useState } from "react";
import { AlignJustify } from "lucide-react";
import { headerLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/db/service";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<null | { email: string }>(
    null
  );
  const path = useLocation().pathname;
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }
    loadUser();
  }, [path]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hiddenAuthBlock = path === "/auth" || path === "/personal-page";

  return (
    <header className="flex justify-between py-5 sm:px-10 px-3 bg-gray-900">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-10 cursor-pointer rounded-4xl"
        />
        <p className="text-xl text-white">NEVERPC</p>
      </Link>

      <div ref={menuRef} className="flex gap-4 items-center">
        {!hiddenAuthBlock &&
          (currentUser ? (
            <Link
              to="/personal-page"
              className="max-sm:px-3 max-sm:py-2 py-1 px-4 bg-emerald-600/80 hover:bg-emerald-600/70 rounded-2xl text-lg"
            >
              <span className="text-white">Личный кабинет</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              className="max-sm:px-3 max-sm:py-2 py-1 px-4 bg-lime-500/80 hover:bg-lime-500/70 rounded-2xl text-lg"
            >
              <span className="text-white">Войти</span>
            </Link>
          ))}

        <AlignJustify
          size={32}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl cursor-pointer"
        />

        {isMenuOpen && (
          <div className="absolute top-20 right-0 w-xs bg-gray-900 z-50">
            {headerLinks.map(({ name, link }, id) => {
              const guarded = link === "/cart" && !currentUser;

              return (
                <LinkItem
                  key={id}
                  link={guarded ? "/auth" : link}
                  name={name}
                  path={path}
                />
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
