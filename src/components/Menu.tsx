import { BsHouse } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { MdLogout, MdLogin } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from 'firebaseApp';
import { toast } from 'react-toastify';
import useTranslation from 'hooks/useTranslation';

const MenuList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const translate = useTranslation();
  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => navigate("/")}>
          <BsHouse />
          <span className="footer__grid--text">{translate('MENU_HOME')}</span>
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <BiUserCircle />
          <span className="footer__grid--text">{translate('MENU_PROFILE')}</span>
        </button>
        <button type="button" onClick={() => navigate("/search")}>
          <AiOutlineSearch />
          <span className="footer__grid--text">{translate('MENU_SEARCH')}</span>
        </button>
        <button type="button" onClick={() => navigate("/notifications")}>
          <IoMdNotificationsOutline />
          <span className="footer__grid--text">{translate('MENU_NOTI')}</span>
        </button>
        {user === null ?
          (
            <button type="button" onClick={() => navigate("/users/login")}>
              <MdLogin />
              <span className="footer__grid--text">{translate('MENU_LOGIN')}</span>
            </button>
          ) : (
            <button type="button" onClick={async () => {
              const auth = getAuth(app);
              await signOut(auth);
              toast.success("로그아웃 되었습니다.")
            }}>
                <MdLogout />
                <span className="footer__grid--text">{translate('MENU_LOGOUT')}</span>
            </button>
          )}
      </div>
    </div>
  );
};

export default MenuList;