export default function Preview({ preview }) {
  return (
    <div>
      <div>
        {preview ? <p>Preview IS enabled.</p> : <p>Preview IS NOT enabled.</p>}
      </div>
      {preview ? (
        <a href="/api/preview/disable">Disable Preview</a>
      ) : (
        <a href="/api/preview/enable">Enable Preview</a>
      )}
    </div>
  );
}

export const getStaticProps = ({ preview = false }) => {
  return { props: { preview } };
};
