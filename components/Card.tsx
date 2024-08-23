export default function Card({className, header, footer, children}) {
  return (
    <div class={`card ${className}`}>
      {header && (
        <div class="header">
          {header}
        </div>
      )}

      <div class="content">
        {children}
      </div>

      {footer && (
        <div class="footer">
          {footer}
        </div>
      )}

    </div>
  );
}
