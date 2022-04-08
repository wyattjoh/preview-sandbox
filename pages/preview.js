export default function Preview({ preview }) {
  return (
    <div>
      <div>
        {preview ? (
          <p>
            Preview IS enabled. <code>getStaticProps</code> could see the
            cookie.
          </p>
        ) : (
          <p>
            Preview IS NOT enabled. <code>getStaticProps</code> could NOT see
            the cookie.
          </p>
        )}
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
