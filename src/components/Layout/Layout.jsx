import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from '../Layout/layout.module.css';

const Layout = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };
  return (
    <>
      <div className={s.header}>
        <NavLink to="/" end className={getActiveClassName}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveClassName}>
          Movies
        </NavLink>
      </div>
      <Suspense
        fallback={
          <ThreeDots color="#ff6347" wrapperStyle={{ margin: 'auto' }} />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
