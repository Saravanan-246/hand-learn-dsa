export const dsaProblemDetails = {
  /* ================= ARRAY ================= */
  "Reverse an Array": {
    description:
      "Given an array of integers, reverse the array in-place without using extra space.",
    input: "arr = [1, 2, 3, 4, 5]",
    output: "[5, 4, 3, 2, 1]",
    answer: `
class ReverseArray {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5};
    int left = 0, right = arr.length - 1;

    while (left < right) {
      int temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }

    for (int num : arr) {
      System.out.print(num + " ");
    }
  }
}
    `,
    // TODO: add time & space complexity
    // TODO: add edge cases (empty array, single element)
  },

  "Find Maximum Element": {
    description:
      "Given an array of integers, find the maximum element present in the array.",
    input: "arr = [10, 5, 20, 8]",
    output: "20",
    answer: `
class MaxElement {
  public static void main(String[] args) {
    int[] arr = {10, 5, 20, 8};
    int max = arr[0];

    for (int i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    System.out.println(max);
  }
}
    `,
    // TODO: handle negative numbers & large arrays
  },

  /* ================= STACK ================= */
  "Valid Parentheses": {
    description:
      "Given a string containing parentheses, check whether it is valid.",
    input: "s = \"()[]{}\"",
    output: "Valid",
    answer: `
import java.util.Stack;

class ValidParentheses {
  public static void main(String[] args) {
    String s = "()[]{}";
    Stack<Character> stack = new Stack<>();

    for (char ch : s.toCharArray()) {
      if (ch == '(' || ch == '{' || ch == '[') {
        stack.push(ch);
      } else {
        if (stack.isEmpty()) {
          System.out.println("Invalid");
          return;
        }
        char top = stack.pop();
        if ((ch == ')' && top != '(') ||
            (ch == '}' && top != '{') ||
            (ch == ']' && top != '[')) {
          System.out.println("Invalid");
          return;
        }
      }
    }

    System.out.println(stack.isEmpty() ? "Valid" : "Invalid");
  }
}
    `,
    // TODO: add test cases for odd length strings
    // TODO: extend for custom brackets
  },

  // ================= ADD LATER =================
  // Linked List problems
  // Queue problems
  // Searching problems
  // Sorting problems
  // Hashing problems
  // String problems
  // Recursion problems

    /* ================= LINKED LIST ================= */
  "Reverse a Linked List": {
    description:
      "Given the head of a singly linked list, reverse the list and return the reversed head.",
    input: "head = 1 -> 2 -> 3 -> 4 -> null",
    output: "4 -> 3 -> 2 -> 1 -> null",
    answer: `
class ReverseLinkedList {
  static class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
  }

  public static Node reverse(Node head) {
    Node prev = null, curr = head;

    while (curr != null) {
      Node nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  }

  public static void main(String[] args) {
    // Example usage
  }
}
    `,
    // TODO: recursive solution
    // TODO: edge cases (empty list, single node)
  },

  "Detect Loop in Linked List": {
    description:
      "Check whether a linked list contains a cycle using Floyd’s Cycle Detection algorithm.",
    input: "head = 1 -> 2 -> 3 -> 4 -> (points back to 2)",
    output: "Loop detected",
    answer: `
class DetectLoop {
  static class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
  }

  public static boolean hasCycle(Node head) {
    Node slow = head, fast = head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) return true;
    }
    return false;
  }

  public static void main(String[] args) {
    // Example usage
  }
}
    `,
    // TODO: return starting node of loop
  },
  /* ================= QUEUE ================= */
  "Implement Queue Using Array": {
    description:
      "Implement a queue using an array and perform basic operations like enqueue and dequeue.",
    input: "enqueue(10), enqueue(20), dequeue()",
    output: "Queue operations successful",
    answer: `
class QueueArray {
  static int[] queue = new int[5];
  static int front = 0, rear = -1, size = 0;

  static void enqueue(int x) {
    if (size == queue.length) {
      System.out.println("Queue Overflow");
      return;
    }
    queue[++rear] = x;
    size++;
  }

  static int dequeue() {
    if (size == 0) {
      System.out.println("Queue Underflow");
      return -1;
    }
    size--;
    return queue[front++];
  }

  public static void main(String[] args) {
    enqueue(10);
    enqueue(20);
    dequeue();
  }
}
    `,
    // TODO: convert to circular queue
    // TODO: dynamic size
  },

  "Reverse Queue": {
    description:
      "Reverse the elements of a queue using stack or recursion.",
    input: "Queue = [1, 2, 3, 4]",
    output: "[4, 3, 2, 1]",
    answer: `
import java.util.*;

class ReverseQueue {
  public static void reverse(Queue<Integer> q) {
    Stack<Integer> stack = new Stack<>();
    while (!q.isEmpty()) {
      stack.push(q.poll());
    }
    while (!stack.isEmpty()) {
      q.add(stack.pop());
    }
  }

  public static void main(String[] args) {
    Queue<Integer> q = new LinkedList<>();
    q.add(1); q.add(2); q.add(3); q.add(4);
    reverse(q);
  }
}
    `,
    // TODO: recursive approach
  },

  /* ================= SEARCHING ================= */
  "Linear Search": {
    description:
      "Search for an element in an array by checking each element one by one.",
    input: "arr = [5, 3, 8, 4], target = 8",
    output: "Element found at index 2",
    answer: `
class LinearSearch {
  public static void main(String[] args) {
    int[] arr = {5, 3, 8, 4};
    int target = 8;

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        System.out.println("Found at index " + i);
        return;
      }
    }

    System.out.println("Not found");
  }
}
    `,
    // TODO: return all occurrences
  },

  "Binary Search": {
    description:
      "Search for an element in a sorted array using binary search.",
    input: "arr = [1, 3, 5, 7, 9], target = 7",
    output: "Element found at index 3",
    answer: `
class BinarySearch {
  public static int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (arr[mid] == target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] arr = {1, 3, 5, 7, 9};
    System.out.println(binarySearch(arr, 7));
  }
}
    `,
    // TODO: recursive version
    // TODO: first & last occurrence
  },
  /* ================= SORTING ================= */
  "Bubble Sort": {
    description:
      "Sort an array using Bubble Sort by repeatedly swapping adjacent elements if they are in the wrong order.",
    input: "arr = [5, 1, 4, 2, 8]",
    output: "[1, 2, 4, 5, 8]",
    answer: `
class BubbleSort {
  public static void main(String[] args) {
    int[] arr = {5, 1, 4, 2, 8};
    int n = arr.length;

    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    for (int x : arr) System.out.print(x + " ");
  }
}
    `,
    // TODO: optimize with early-exit flag
    // TODO: add time & space complexity
  },

  "Selection Sort": {
    description:
      "Sort an array by repeatedly selecting the minimum element and placing it at the beginning.",
    input: "arr = [64, 25, 12, 22, 11]",
    output: "[11, 12, 22, 25, 64]",
    answer: `
class SelectionSort {
  public static void main(String[] args) {
    int[] arr = {64, 25, 12, 22, 11};
    int n = arr.length;

    for (int i = 0; i < n - 1; i++) {
      int minIdx = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      int temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }

    for (int x : arr) System.out.print(x + " ");
  }
}
    `,
    // TODO: compare with insertion sort
  },

  /* ================= HASHING ================= */
  "Frequency of Elements": {
    description:
      "Count the frequency of each element in an array using HashMap.",
    input: "arr = [1, 2, 2, 3, 3, 3]",
    output: "{1=1, 2=2, 3=3}",
    answer: `
import java.util.*;

class FrequencyElements {
  public static void main(String[] args) {
    int[] arr = {1, 2, 2, 3, 3, 3};
    Map<Integer, Integer> map = new HashMap<>();

    for (int x : arr) {
      map.put(x, map.getOrDefault(x, 0) + 1);
    }

    System.out.println(map);
  }
}
    `,
    // TODO: sort by frequency
  },

  "First Non-Repeating Character": {
    description:
      "Find the first character in a string that does not repeat.",
    input: "s = \"aabbcdde\"",
    output: "c",
    answer: `
import java.util.*;

class FirstNonRepeating {
  public static void main(String[] args) {
    String s = "aabbcdde";
    Map<Character, Integer> map = new LinkedHashMap<>();

    for (char ch : s.toCharArray()) {
      map.put(ch, map.getOrDefault(ch, 0) + 1);
    }

    for (Map.Entry<Character, Integer> e : map.entrySet()) {
      if (e.getValue() == 1) {
        System.out.println(e.getKey());
        return;
      }
    }
  }
}
    `,
    // TODO: handle uppercase & symbols
  },
  /* ================= STRING ================= */
  "Reverse a String": {
    description:
      "Reverse the given string without using extra data structures.",
    input: "s = \"hello\"",
    output: "\"olleh\"",
    answer: `
class ReverseString {
  public static void main(String[] args) {
    String s = "hello";
    char[] arr = s.toCharArray();
    int left = 0, right = arr.length - 1;

    while (left < right) {
      char temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }

    System.out.println(new String(arr));
  }
}
    `,
    // TODO: recursive version
  },

  "Check Palindrome": {
    description:
      "Check whether a given string is a palindrome.",
    input: "s = \"madam\"",
    output: "Palindrome",
    answer: `
class PalindromeCheck {
  public static void main(String[] args) {
    String s = "madam";
    int left = 0, right = s.length() - 1;

    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) {
        System.out.println("Not Palindrome");
        return;
      }
      left++;
      right--;
    }

    System.out.println("Palindrome");
  }
}
    `,
    // TODO: ignore spaces & case
  },

  /* ================= RECURSION ================= */
  "Factorial of a Number": {
    description:
      "Find the factorial of a number using recursion.",
    input: "n = 5",
    output: "120",
    answer: `
class Factorial {
  static int fact(int n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
  }

  public static void main(String[] args) {
    System.out.println(fact(5));
  }
}
    `,
    // TODO: iterative approach
  },

  "Fibonacci Series": {
    description:
      "Print the Fibonacci series using recursion.",
    input: "n = 6",
    output: "0 1 1 2 3 5",
    answer: `
class Fibonacci {
  static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }

  public static void main(String[] args) {
    int n = 6;
    for (int i = 0; i < n; i++) {
      System.out.print(fib(i) + " ");
    }
  }
}
    `,
    // TODO: optimize using memoization
  },

};
