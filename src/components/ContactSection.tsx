export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">
        Feel free to reach out to me via email or connect on LinkedIn!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:yeozongyao@gmail.com"
          className="text-accent underline"
        >
          yeozongyao@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/yeozongyao"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
