export default function Preview({ preview }) {
  return (
    <div>
      <div className="mb-4">
        {preview ? <p>Preview IS enabled.</p> : <p>Preview IS NOT enabled.</p>}
      </div>
      {preview ? (
        <a href="/api/preview/disable" className="p-2 bg-indigo-500 text-white">
          Disable Preview
        </a>
      ) : (
        <a href="/api/preview/enable" className="p-2 bg-indigo-500 text-white">
          Enable Preview
        </a>
      )}
    </div>
  );
}

export const getStaticProps = ({ preview = false }) => {
  return { props: { preview } };
};
