import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';

export default function ProductView() {
  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <ShowVideo />
      </div>
    </div>
  );
}
