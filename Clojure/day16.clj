(ns day16
  (:require [input :refer [f->lines]]))

(def gift {"children" 3 "cats" 7 "samoyeds" 2 "pomeranians" 3 "akitas" 0
           "vizslas" 0 "goldfish" 5 "trees" 3 "cars" 2 "perfumes" 1})

(defn -main [day]
  (let [input (map #(->> % (re-seq #"(\w+): (\d+)") (map (fn [[_ k v]] [k (parse-long v)]))) (f->lines day))
        c #(%1 (second %2) (gift (first %2)))
        solve (fn [p] (reduce #((if (every? p %2) reduced inc) %1) 1 input))]
    {:part1 (solve #(c = %))
     :part2 (solve
             (fn [[k _ :as it]]
               (cond
                 (some #{k} ["cats" "trees"]) (c > it)
                 (some #{k} ["pomeranians" "goldfish"]) (c < it)
                 :else (c = it))))}))
