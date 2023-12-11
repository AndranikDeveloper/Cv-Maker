export function setInRegister(
  e: React.ChangeEvent<HTMLInputElement>,
  setImg?: React.Dispatch<React.SetStateAction<string>>
) {
  const fileInput = e.target;
  if (fileInput.files && fileInput.files.length > 0) {
    const photo = fileInput.files[length];
    const objectUrl = URL.createObjectURL(photo);
    setImg!(objectUrl);
  }
}
