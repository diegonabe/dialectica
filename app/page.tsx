import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div class="navbar bg-base-300">
        <div class="navbar-start">

          <a class="btn btn-ghost normal-case text-xl">Dialectica</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>About Us</a></li>
            <li><a>How it Works</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Login</a>
        </div>
      </div>
      <h1 className='text-xl p-5 text-center bg-gray-500 inline-block border-4 border-black'>Hola</h1>
    </div>
  )
}
