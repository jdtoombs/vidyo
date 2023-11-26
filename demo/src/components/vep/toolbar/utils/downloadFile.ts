/**
 * function to download a file without clicking on a link
 * @param outputFile the string name of the output file
 * @param data the file data
 */

export const downloadFile = (outputFile: string, data: any) => {
  var download = document.createElement("a");
  download.href = URL.createObjectURL(new Blob([data]));
  download.download = outputFile;
  download.click();
  download.remove();
};
