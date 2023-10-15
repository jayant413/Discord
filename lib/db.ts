import mongoose from "mongoose";

const { MONODB_USERNAME, MONODB_PASSWORD } = process.env;

export const ConnectionStr =
  "mongodb+srv://" +
  MONODB_USERNAME +
  ":" +
  MONODB_PASSWORD +
  "@cluster.hutm20z.mongodb.net/discord";

export const DBConnect = async (): Promise<{
  status: boolean;
  message: string;
}> => {
  let connection: { status: boolean; message: string };

  try {
    await mongoose.connect(ConnectionStr);
    connection = {
      status: true,
      message: "Database connection established",
    };
  } catch (err) {
    connection = {
      status: false,
      message: err instanceof Error ? err.message : "An error occurred",
    };
  }

  return connection;
};
