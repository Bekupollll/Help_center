const Manager = () => (
  <div className="w-full px-20">
    <h1 className="text-2xl text-gray-800 font-bold">ГАрын авлага</h1>
    <p className="text-xl text-gray-600">Менежер эрх</p>
    <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
      <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-[#553ded] rounded-md px-3 py-2 w-full">
        Системд нэвтрэхдээ https://amjilt.com веб хаягаар дамжуулан хандана.
        Системд хандалт хийсний дараа нүүр хуудасны нэвтрэх хэсгийг сонгон админ
        өөрийн нэвтрэх нэр болон нууц үгийг оруулан системд орно.
      </h1>
    </div>
    <img src="/Manager/Mac.png" className="my-10" />
    <div className="flex flex-col md:mb-auto flex-1">
      <ul className="flex flex-col gap-3 w-full sm:max-w-md">
        <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
          Нэвтрэх нэр хэсэгт өөрийн системийн нэвтрэх нэрийг оруулна.
        </li>
        <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
          Нууц үг хэсэгт өөрийн нууц үгийг оруулна.
        </li>
        <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
          Нэвтрэх гэж дарснаар та веб-д амжилттай нэвтрэх болно.
        </li>
        <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
          Менежерүүдийн жагсаалт
        </li>
      </ul>
    </div>

    <div className="w-full md:py-10">
      <h1 className="text-2xl text-gray-800 font-bold">Самбар</h1>
      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-[#553ded] rounded-md px-3 py-2 w-full">
          Амжилттай нэвтэрсний дараа веб хуудас дараах байдлаар харагдана.
        </h1>
      </div>
      <img src="/Manager/sambar.png" className="my-10" />
      <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-[#553ded] rounded-md px-3 py-2 my-10 w-full">
        Дэлгэцийн зүүн дээд талд самбар хэсэг байрлах ба энэ хуудсаас та статистик мэдээллүүдтэй дэлгэрэнгүй танилцах боломжтой болно.
      </h1>
      <div className="flex flex-col md:mb-auto flex-1">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
            Нийт төгссөн ангийн тоо 
          </li>
          <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
            Идэвхтэй анги 
          </li>
          <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
            Нэвтрэх гэж дарснаар та веб-д амжилттай нэвтрэх болно.
          </li>
          <li className="w-full bg-gray-200 p-2 rounded-md text-slate-600">
            Менежерүүдийн жагсаалт
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Manager;
