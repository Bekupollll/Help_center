const Admin = () => (
  <div className="w-full px-20">
    <h1 className="text-2xl font-bold">Хэрэглэгчид</h1>
    <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
      <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-[#553ded] rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
        Дэлгэцийн зүүн дээд талд хэрэгэлчид хэсэгт дарж дараах мэдээллүүдийг
        харж болно.
      </h1>
    </div>

    <div className="flex flex-col md:mb-auto flex-1">
      <ul className="flex flex-col gap-3 w-full sm:max-w-md">
        <li className="w-full bg-gray-100 p-2 rounded-md">
          Сурагчдын жагсаалт
        </li>
        <li className="w-full bg-gray-100 p-2 rounded-md">Багшийн жагсаалт</li>
        <li className="w-full bg-gray-100 p-2 rounded-md">
          Асран хамгаалагчийн жагсаалт
        </li>
        <li className="w-full bg-gray-100 p-2 rounded-md">
          Менежерүүдийн жагсаалт
        </li>
      </ul>
    </div>

    <div className="py-4">
      <img
        className="w-[1000px] h-[479px] object-contain"
        src="/manager1.png"
        width={10000}
        height={10000}
        alt="Picture1"
      ></img>
    </div>
  </div>
);

export default Admin;
