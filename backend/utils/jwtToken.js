export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // must be true for HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // 'none' for cross-site
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      message,
      token,
    });
};
