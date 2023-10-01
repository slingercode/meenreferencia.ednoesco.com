import { Terminal } from "lucide-react";

import { Form } from "~/components/form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { getData } from "~/db/db.getters";

export default async function Home() {
  const rows = await getData();

  return (
    <main className="mx-auto flex h-[100dvh] max-w-screen-sm flex-col items-center justify-center gap-4 p-10 md:p-24">
      {rows.map((row) => (
        <Alert key={row.name}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{row.name}</AlertTitle>

          <AlertDescription className="flex flex-row items-center justify-between">
            <p className="text-sm [&_p]:leading-relaxed">{`Points: ${row.count}`}</p>
            <Form name={row.name} />
          </AlertDescription>
        </Alert>
      ))}
    </main>
  );
}
