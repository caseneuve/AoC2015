(ns day13
  (:require [input :refer [f->str]]
            [clojure.math.combinatorics :as combo]))

(defn parse [it]
  (reduce
   (fn [m [a _ o n _ _ _ _ _ _ b]] (update m a merge {b (parse-long (case o "gain" n (str "-" n)))}))
   {} (->> it (re-seq #"\w+") (partition 11))))

(defn optimal-happiness [it & me]
  (let [cx (combo/permutations (concat (keys it) me))]
    (apply
     max
     (reduce
      (fn [s p]
        (let [px (partition 2 1 (conj p (last p)))]
          (conj s (reduce #(+ %1 (get-in it %2 0) (get-in it (vec (reverse %2)) 0)) 0 px))))
      [] (take (/ (count cx) 2) cx)))))

(defn -main [day]
  (let [input (->> day f->str parse), solve (partial optimal-happiness input)]
    {:part1 (solve) :part2 (solve "Me")}))


(comment
  (let [test-input (parse "Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.")]
    (= 330 (optimal-happiness test-input)))
  )
