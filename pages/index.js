export default function Home() {
  return (
    <div>
      <div>Home</div>
      <iframe
        src={`${process.env.NEXT_PUBLIC_PREVIEW_ORIGIN}/api/preview/enable`}
      />
    </div>
  );
}
