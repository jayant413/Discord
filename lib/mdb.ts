import mongoose from "mongoose";

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

export const ConnectionStr =
  "mongodb+srv://" +
  MONGODB_USERNAME +
  ":" +
  MONGODB_PASSWORD +
  "@cluster.hutm20z.mongodb.net/discord";

export const ConnectDB = async (): Promise<{
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
    console.log("Database connection established");
  } catch (err) {
    connection = {
      status: false,
      message: err instanceof Error ? err.message : "An error occurred",
    };
    console.log(err instanceof Error ? err.message : "An error occurred");
  }

  return connection;
};
