import multer from "multer";

const storage = multer.memoryStorage();

export const resumeUpload = multer({ storage }).single('resume');

export const photoUpload = multer({ storage }).single("profilePhoto");