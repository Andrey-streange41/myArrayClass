
// spred rest

class MyArray
{
    #_length = 0;
    #_container = [];
    constructor(_length)
    {
        this.#_length = _length;
        this.#_container = [];
    }
    //Используйте для получения длины коллекции.
    GetLength()
    {
        return this.#_length;
    }
    //Используйте для добавления элемента в конец коллекции.
    //Возвращает количество элементов после добавления нового элемента.
    pushBack(item)
    {
        if(this.GetLength() === 0)
        {
          this.#_container[this.#_length++] = item;
          return this.GetLength(); 
        }
        this.#_container[this.#_length++] = item;
        return this.GetLength();
    }
    //Используйте для добавления значения в начало коллекции.
    //Возвращает количество элементов после добавления нового элемента.
    pushFront(item)
    {
        if(this.GetLength() === 0)
        {
          this.#_container[this.#_length++] = item;
          return this.GetLength();
        }
        let tmp = [];
        for(let i = 0; i< this.#_length;i++)
            tmp[i+1] = this.#_container[i];
        tmp[0]=item;
        this.#_length++;
        for(let i=0;i<this.#_length;i++)
            this.#_container[i] = tmp[i];
        return this.GetLength();
    }
    //Используйте для получения значения в коллекции по заданному индексу.
    GetItemById(index)
    {
        if(isNaN(item))
            throw TypeError("Функция ожидала в качестве параметра число !");
        if(index >= this.GetLength() || index < 0)
            throw new RangeError("Выход за границы массива при доступе к элементу !");
        return this.GetLength() === 0 ? null : this.#_container[index];
    }
    //Используйте для добавления элементов в заданую позицыю в коллекции .
    //Не может быть добавленно в позицыю за пределами коллекции.
    //Возвращает количество элементов после добавления нового элемента.
    insert(item, pos)
    {
        if(pos > this.GetLength() || pos < 0)
            throw new RangeError("Выход за границы массива при добавлении элемента !");
        if(this.GetLength() === 0)
        { 
            this.pushBack(item);
            return this.GetLength();
        }
        if(pos === this.GetLength())
        {
            this.pushBack(item);
            return this.GetLength();
        }
        else if (pos === 0)
        {
            this.pushFront(item);
            return this.GetLength();
        }
        else
        {
            let tmp = [];
            for(let i = 0; i < this.GetLength() + 1; i++)
            {
                if(i < pos)
                    tmp[i] = this.#_container[i];
                else if(i === pos)
                    tmp[i] === item;
                else 
                    tmp[i] = this.#_container[i - 1];
            }
             this.#_length++;
             tmp[pos] = item;
            for(let i = 0 ; i < this.GetLength(); i++)
                this.#_container[i] = tmp[i];
            return this.GetLength();
        }
    }
    //Используйте для проверки существования значения в коллекции.
    includes(item)
    {
        for(let i = 0; i < this.GetLength(); i++)
        {
            if(this.#_container[i] === item)
                return true;
        }
        return false;
    }
    //Используйте для получения копии вашей коллекции.
    GetContainer()
    {
        let instance = [...this.#_container];
        return instance;
    }
    //Используйte для реверса вашей коллекции.
    reverse()
    {
        for(let i = 0; i < this.GetLength() / 2; i++)
        {
            let tmp = this.#_container[i];
            this.#_container[i] = this.#_container[this.GetLength() - i - 1];
            this.#_container[this.GetLength() - i - 1] = tmp;
        }
        return this.GetContainer();
    }
    //Используйте для удаления с начала колекции.
    //Возвращает удаленный элемент.
    popFront()
    {
        if(this.GetLength() === 0)
            throw new RangeError("Список пуст, невозможно удалить элемент !");
        else if(this.GetLength() === 1)
        {
            let cash=this.#_container[0];
            this.#_container = [];
            this.#_length--;
            return cash;
        }
        let tmp =[];
        let cash= this.#_container[0];
        for(let i = 0; i < this.GetLength(); i++)
        {
            tmp[i] = this.#_container[i + 1];
        }
        this.#_container = [];
        this.#_length--;
        for(let i = 0; i < this.GetLength(); i++)
        {
            this.#_container[i] = tmp[i];
        }
        return cash;
    }
    //Используйте для удаления с конца колекции.
    //Возвращает удаленный элемент.
    popBack()
    {
        if(this.GetLength() === 0)
            throw new RangeError("Список пуст, невозможно удалить элемент !");
        else if(this.GetLength() === 1)
        {
            let cash = this.#_container[0];
            this.#_container = [];
            this.#_length--;
            return cash;
        }
        let cash = this.#_container[this.GetLength()-1];   
        this.#_length--;
        let tmp =[];
        for(let i = 0; i < this.GetLength(); i++)
        {
            tmp[i] = this.#_container[i];
        }
        this.#_container = [];
        for(let i = 0; i < this.GetLength(); i++)
        {
            this.#_container[i] = tmp[i];
        }
        return cash;
    }
    //Удаление по указанной позиции.
    removeFrom(index)
    {
        if(index >= this.GetLength() || index < 0 || this.GetLength() <= 0)
            throw new RangeError("Выход за границы массива при добавлении элемента !");
        else if(this.GetLength() === 1)
        {
            let cash = this.#_container[0];
            this.popBack();
            return  cash;
        }
        let cash = this.#_container[index];
        let tmp = [];
        for(let i = 0; i < this.#_length; i++)
        {
            if(i < index)
                tmp[i] = this.#_container[i];
            else 
                tmp[i] = this.#_container[i+1];
        }
        this.#_container=[];
        this.#_length--;
        for(let i = 0; i < this.#_length; i++)
        {
            this.#_container[i] = tmp[i];
        }
        return cash;
    }
    //Функция возвращает индекс первого вхождения, заданного элемента в коллекции.
    //В противном случае, если элемент не найден возвращает -1.
    indexOf(item)
    {
        for(let i = 0; i < this.GetLength(); i++)
        {
            if(this.GetContainer()[i] === item)
                return i;
        }
        return -1;
    }
    //Принимает в параметры функцию и приминяет её к каждому элементу коллекции.
    mapTest(action)
    {
        let resultContainer =  this.GetContainer();
        for(let i = 0; i < this.GetLength(); i++)
        {
            resultContainer[i] = action(resultContainer[i]);
        }
        return resultContainer;
    }
     //Принимает в параметры функцию и приминяет её к каждому элементу коллекции.
    foreachTest(action)
    {
        for(let i = 0; i < this.GetLength(); i++)
        {
           action(this.GetContainer()[i]);
        }
    }
    //Возвращает подмасив элементов.
    mySlice(startIndex, stopIndex)
    {
        if(stopIndex < 0 || stopIndex >= this.GetLength())
            throw TypeError("stopIndex выходит за границы массива !!");
        if(startIndex < 0 || startIndex >= this.GetLength())
            throw TypeError("startIndex выходит за границы массива !!");
        if(startIndex >= stopIndex)
            throw TypeError("startIndex не может быть больше или равен stopIndex !!");
        if(isNaN(startIndex))
            throw TypeError("Функция ожидала в качестве параметра число !");
        let resultArr = [];
        if(stopIndex !== 'undefined' && stopIndex !== null && !isNaN(stopIndex))
        {
            for(let i = 0, j = 0; i < stopIndex; i++,j++)
            {
                if(this.GetContainer()[startIndex+i] === this.GetContainer()[this.GetLength()-1])
                {
                    resultArr[j] = this.GetContainer()[startIndex+i]; 
                    break;
                }
                resultArr[j] = this.GetContainer()[startIndex+i];
            }
            return resultArr;
        }
        for(let i = 0, j = 0; i < this.GetLength(); i++,j++)
        {
            if(this.GetContainer()[startIndex+i] === this.GetContainer()[this.GetLength()-1])
            {
                resultArr[j] = this.GetContainer()[startIndex+i]; 
                break;
            }
            resultArr[j] = this.GetContainer()[startIndex+i];
        }
        return resultArr;
    }
}


const tmp = new MyArray(0);
tmp.insert(0,0);
tmp.insert(1,1);
tmp.insert(122,2);
tmp.insert(22,3);
console.log(tmp.GetContainer());



console.log(tmp.mySlice(2,3));


