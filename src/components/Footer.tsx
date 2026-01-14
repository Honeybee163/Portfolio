const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-primary font-medium">Hania Rahman</span>
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
