-- CreateTable
CREATE TABLE `Header` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_pengajuan` VARCHAR(191) NOT NULL,
    `kswp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `incoterms` VARCHAR(191) NOT NULL,
    `valuta` VARCHAR(191) NOT NULL,
    `kurs` DOUBLE NOT NULL,
    `nilai` DOUBLE NOT NULL,
    `biaya_tambahan` DOUBLE NOT NULL,
    `biaya_pengurang` DOUBLE NOT NULL,
    `voluntary_declaration` DOUBLE NOT NULL,
    `nilai_fob` DOUBLE NOT NULL,
    `asuransi` DOUBLE NOT NULL,
    `freight` DOUBLE NOT NULL,
    `cif` DOUBLE NOT NULL,
    `cif_rp` DOUBLE NOT NULL,
    `bruto` DOUBLE NOT NULL,
    `netto` DOUBLE NOT NULL,
    `flag_kontainer` VARCHAR(191) NOT NULL,
    `headerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Detail` ADD CONSTRAINT `Detail_headerId_fkey` FOREIGN KEY (`headerId`) REFERENCES `Header`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
