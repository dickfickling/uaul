import Amplitude from "./amplitude";
import Form from "./form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Form />
      <Amplitude eventName="view-home" eventProperties={{}} />
    </main>
  );
}
