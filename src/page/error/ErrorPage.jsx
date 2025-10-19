import React from "react";
import EmptyIcon from "../../components/ui/EmptyIcon";
import notFound from '../../assets/animations/404.json';
import serverError from '../../assets/animations/404.json';
import forbidden from '../../assets/animations/404.json';
// import networkErr from '../../assets/animations/neterror.json';

import { Link } from "react-router-dom";

const ErrorPage = ({ type }) => {
  let title = "Xatolik yuz berdi";
  let message = "Kechirasiz, biror narsa noto‘g‘ri ketdi.";
  let color = "text-red-500";
  let animImg = notFound;

  switch (type) {
    case "404":
      title = "Sahifa topilmadi";
      message = "Kechirasiz, izlayotgan sahifani topa olmadik.";
      color = "text-yellow-500";
      animImg = notFound;
      break;
    case "500":
      title = "Server xatosi";
      message = "Serverda kutilmagan xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.";
      color = "text-red-600";
      animImg = serverError;
      break;
    case "403":
      title = "Ruxsat berilmagan";
      message = "Sizda bu sahifaga kirish huquqi yo‘q.";
      color = "text-orange-600";
      animImg = forbidden;
      break;
    case "network":
      title = "Tarmoq xatosi";
      message = "Internetga ulanishda muammo yuz berdi.";
      color = "text-blue-600";
      // animImg = networkErr;
      animImg = forbidden;
      break;
    default:
      title = `Xato kodi: ${type}`;
      message = "Noma’lum xatolik yuz berdi.";
      color = "text-gray-600";
  }

  return (
    <div className="w-[100%] h-[100vh] text-center p-10">
      <EmptyIcon source={animImg} size={200} />
      <h1 className={`text-3xl font-bold ${color}`}>{title}</h1>
      <p className="text-lg mt-4">{message}</p>
      <Link to={"/"}>Asosiy sahifa</Link>
    </div>
  );
};

export default ErrorPage;
