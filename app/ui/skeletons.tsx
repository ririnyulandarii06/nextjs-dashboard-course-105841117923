// Komponen-komponen ini berfungsi sebagai placeholder saat data sedang dimuat.
// Ini meningkatkan pengalaman pengguna dengan memberikan umpan balik visual bahwa konten sedang diproses.

import { lusitana } from '@/app/ui/fonts';

// Skeleton dasar untuk kartu dashboard
export function CardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm">
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

// Skeleton untuk seluruh wrapper kartu
export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

// Skeleton untuk bagan pendapatan
export function RevenueChartSkeleton() {
  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white p-4">
          <div className="flex items-end justify-between text-sm">
            <div className="hidden h-[280px] w-[500px] items-end rounded-md bg-gray-100 md:block" />
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <p>Last 12 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Skeleton untuk baris tabel faktur di tampilan mobile
export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

// Skeleton untuk tabel faktur lengkap di tampilan desktop
export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Skeleton untuk baris tabel di desktop
export function InvoiceTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>

      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>

      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>

      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-20 rounded bg-gray-100"></div>
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-20 rounded bg-gray-100"></div>
      </td>

      {/* Edit Button */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3 text-right text-sm font-medium">
        <div className="h-8 w-8 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}
