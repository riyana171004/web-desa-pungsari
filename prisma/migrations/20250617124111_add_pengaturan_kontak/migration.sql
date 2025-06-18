-- CreateTable
CREATE TABLE "pengaturan_kontak" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nilai" TEXT NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pengaturan_kontak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pengaturan_kontak_nama_key" ON "pengaturan_kontak"("nama");
