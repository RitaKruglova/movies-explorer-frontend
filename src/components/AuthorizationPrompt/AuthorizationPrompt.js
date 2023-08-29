import { Link } from "react-router-dom";

function AuthorizationPrompt({paragraphText, linkPath, linkText}) {
  return (
    <div className="authorization-prompt">
      <p className="authorization-prompt__question">{paragraphText}</p>
      <Link to={linkPath} className="authorization-prompt__link">{linkText}</Link>
    </div>
  )
}

export default AuthorizationPrompt;
