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
          {translate('MENU_HOME')}
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <BiUserCircle />
          {translate('MENU_PROFILE')}
        </button>
        <button type="button" onClick={() => navigate("/search")}>
          <AiOutlineSearch />
          {translate('MENU_SEARCH')}
        </button>
        <button type="button" onClick={() => navigate("/notifications")}>
          <IoMdNotificationsOutline />
          {translate('MENU_NOTI')}
        </button>
        {user === null ?
          (
            <button type="button" onClick={() => navigate("/users/login")}>
              <MdLogin />
              {translate('MENU_LOGIN')}
            </button>
          ) : (
            <button type="button" onClick={async () => {
              const auth = getAuth(app);
              await signOut(auth);
              toast.success("로그아웃 되었습니다.")
            }}>
                <MdLogout />
                {translate('MENU_LOGOUT')}
            </button>
          )}
      </div>
    </div>
  );
};

export default MenuList;