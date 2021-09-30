function initState<T>(initial: T): [() => T, (v:T) => void] {
  let val: T = initial
  return [
    () => val,
    (v:T) => {
      val = v
    }
  ]
}

const [firstGetter, firstSetter ] = initState(10) //* state awal bisa berubah sesuai kebutuhan user
console.log(firstGetter());
console.log("====Change by setter=====");
firstSetter(100)
console.log(firstGetter());

const [secondGetter, secondSetter ] = initState<string | number>("from second getter") //*untuk fasilitasi dua tipe berbeda maka T harus dibuat
console.log(secondGetter());
console.log("====Change by setter=====");
secondSetter("second getter CHANGED")
console.log(secondGetter());
 
//* EXAMPLE 2

/* bentuk awal
function grader<GradeItem>(
  items: GradeItem[],
  grade: (val: GradeItem) => number
  ): GradeItem[] {
    interface Grade {
      item: GradeItem,
      grade: number
    }
    const grades: Grade[] = items.map((item) => ({
      item,
      grade: grade(item)
    }))
    grades.sort((a,b) => a.grade - b.grade)

    return grades.map((grade) => grade.item)
  }
*/

interface Grade<GradeItem> {
  item: GradeItem,
  grade: number
}

function grader<GradeItem>(
  items: GradeItem[],
  grade: (v: GradeItem) => number
  ): GradeItem[] {
    const grades: Grade<GradeItem>[] = items.map((item) => ({
      item,
      grade: grade(item)
    }))
    grades.sort((a,b) => a.grade - b.grade)
    return grades.map((grade) => grade.item)
}

interface Student {
  name: string,
  age: number
}

const student: Student[] = [
  {
    name: "John",
    age: 9
  },
  {
    name: "Jean",
    age: 5
  }
]

const gradingStudent = grader(student, ({age})=> age);
console.log(gradingStudent);


