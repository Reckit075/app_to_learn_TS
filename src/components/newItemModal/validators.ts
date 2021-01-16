const validators = {
 titleValidator: {
  required: 'Tytuł jest wymagany',
  minLength: {
   value: 3,
   message: 'Tytuł musi zawierać minimum 3 znaki',
  },
  maxLength: {
   value: 40,
   message: 'Tytuł nie może być dłuższy niż 40 znaków',
  },
 },
 authorValidator: {
  required: 'Autor jest wymagany',
  minLength: {
   value: 3,
   message: 'Autor musi zawierać minimum 3 znaki',
  },
  maxLength: {
   value: 40,
   message: 'Autor nie może być dłuższy niż 40 znaków',
  },
 },
 descriptionValidator: {
  required: 'Opis jest wymagany',
  minLength: {
   value: 3,
   message: 'Opis musi zawierać minimum 3 znaki',
  },
  maxLength: {
   value: 150,
   message: 'Opis nie może być dłuższy niż 40 znaków',
  },
 },
};

export default validators;
