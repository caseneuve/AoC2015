(ns day20
  (:require [input :refer [f->str]]))

(defn solve1 [it]
  (loop [elf 1, house-num elf, houses (vec (repeat it 0))]
    (cond
      (>= elf it) (count (take-while #(<= % it) houses))
      (>= house-num it) (recur (inc elf) (inc elf) houses)
      :else (recur elf (+ house-num elf) (update houses house-num + elf)))))

(defn solve2 [it]
  (loop [elf 1, house-num elf, visits 1, houses (vec (repeat it 0))]
    (cond
      (>= elf it) (count (take-while #(<= % (* 10 it)) houses))
      (or (> visits 50) (>= house-num it)) (recur (inc elf) (inc elf) 1 houses)
      :else (recur elf (+ house-num elf) (inc visits) (update houses house-num + (* 11 elf))))))

(defn -main [day]
  (let [it (-> day f->str parse-long (/ 10))]
    {:part1 (solve1 it) :part2 (solve2 it)}))
