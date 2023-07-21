export default function Modal() {
  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40'></div>
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto bg-transparent'>
          <span className='text-secondary loading loading-infinity w-24 h-24'></span>
        </div>
      </div>
    </div>
  );
}
