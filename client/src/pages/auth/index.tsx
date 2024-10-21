import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1> Welcome to Your Own Personal Finance Tracker!</h1>
        {/* Sign Up Button */}
        <SignUpButton mode="modal" />
        {/* Sign In Button */}
        <SignInButton mode="modal" />
      </SignedOut>

      {/* Redirect to the dashboard if the user is signed in */}
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
    </div>
  );
};
